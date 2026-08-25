/** Official house/office cleaning rate rules
 *
 * Rate is based on TOTAL maid-hours (helpers × booked hours), not clock hours alone.
 * Example: 1 helper × 2 hours = 2 maid-hours → RM40/hr → RM80
 *          2 helpers × 2 hours = 4 maid-hours → RM35/hr → RM140
 */

export const MIN_HOURS = 2;
export const RATE_MIN_ORDER = 40; // only for the minimum: 1 helper × 2 hours (2 maid-hours)
export const RATE_VOLUME = 35; // when total maid-hours >= 3
export const EXTEND_RATE = 40;
export const POST_RENO_RATE = 40;
export const NIGHT_RATE = 60;
export const TOOLS_ADDON = 30;
export const LADDER_ADDON = 40;

/** @deprecated use RATE_MIN_ORDER — kept for any old imports */
export const RATE_2H = RATE_MIN_ORDER;
/** @deprecated use RATE_VOLUME */
export const RATE_3H_PLUS = RATE_VOLUME;

export type JobType = "house" | "post-reno" | "night";

export function clampHours(hours: number): number {
  if (!Number.isFinite(hours) || hours < MIN_HOURS) return MIN_HOURS;
  return Math.floor(hours);
}

export function clampHelpers(helpers: number): number {
  if (!Number.isFinite(helpers) || helpers < 1) return 1;
  return Math.min(8, Math.floor(helpers));
}

/** Total maid-hours = helpers × session hours */
export function totalMaidHours(helpers: number, hours: number): number {
  return clampHelpers(helpers) * clampHours(hours);
}

/**
 * House/office hourly rate per maid.
 * RM40 only for the minimum order (2 maid-hours).
 * RM35 once total maid-hours is 3 or more (e.g. 1×3, 2×2, 2×4…).
 */
export function hourlyRate(
  hours: number,
  jobType: JobType = "house",
  helpers = 1,
): number {
  if (jobType === "night") return NIGHT_RATE;
  if (jobType === "post-reno") return POST_RENO_RATE;
  const maidHours = totalMaidHours(helpers, hours);
  if (maidHours <= 2) return RATE_MIN_ORDER;
  return RATE_VOLUME;
}

export function estimateTotal(params: {
  helpers: number;
  hours: number;
  jobType?: JobType;
  tools?: boolean;
  ladder?: boolean;
}): {
  hours: number;
  helpers: number;
  rate: number;
  maidHours: number;
  labour: number;
  addons: number;
  total: number;
} {
  const hours = clampHours(params.hours);
  const helpers = clampHelpers(params.helpers);
  const jobType = params.jobType ?? "house";
  const rate = hourlyRate(hours, jobType, helpers);
  const maidHours = helpers * hours;
  const labour = maidHours * rate;
  const addons =
    (params.tools ? TOOLS_ADDON : 0) + (params.ladder ? LADDER_ADDON : 0);
  return {
    hours,
    helpers,
    rate,
    maidHours,
    labour,
    addons,
    total: labour + addons,
  };
}
