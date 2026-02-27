export type LifecycleStage =
  | "pre-arrival"
  | "arrival"
  | "integration"
  | "leadership"
  | "reentry";

export type WorldviewBackground =
  | "muslim"
  | "hindu"
  | "buddhist"
  | "secular"
  | "nominal";

export interface EmpathyMap {
  seeing: string[];
  hearing: string[];
  thinkingFeeling: string[];
  sayingDoing: string[];
}

export interface Quote {
  text: string;
  attribution: string; // e.g., "Chinese graduate student" — keep anonymous
}

export interface MinistryGuidance {
  posture: string; // e.g., "Be a guide, not a host"
  approaches: string[];
  pitfalls: string[];
}

export interface JourneyCell {
  stage: LifecycleStage;
  background: WorldviewBackground;
  empathyMap: EmpathyMap;
  quotes: Quote[];
  ministry: MinistryGuidance;
  bridges: string[];
  barriers: string[];
}

export type StageColor = "indigo" | "violet" | "blue" | "emerald" | "amber";

export interface StageInfo {
  id: LifecycleStage;
  label: string;
  subtitle: string;
  emotion: string;
  description: string;
  color: StageColor;
}

export interface BackgroundInfo {
  id: WorldviewBackground;
  label: string;
  worldviewFramework: string;
  description: string;
  icon: string; // emoji character representing this worldview background
}
