// Avatar configurations for Brinda
export interface Avatar {
  id: string;
  emoji: string;
  name: string;
  description: string;
  unlockedAtLevel: number;
}

export interface Decoration {
  id: string;
  name: string;
  emoji: string; // Crown, star, etc.
  unlockedAtLevel: number;
  position: "top" | "left" | "right" | "bottom";
}

export const GIRL_AVATARS: Avatar[] = [
  { id: "avatar_1", emoji: "👧", name: "Girl", description: "Classic girl avatar", unlockedAtLevel: 1 },
  { id: "avatar_2", emoji: "👩", name: "Woman", description: "Elegant woman", unlockedAtLevel: 1 },
  { id: "avatar_3", emoji: "👱‍♀️", name: "Blonde Girl", description: "Blonde hair avatar", unlockedAtLevel: 2 },
  { id: "avatar_4", emoji: "🧔‍♀️", name: "Girl with Glasses", description: "Studious look", unlockedAtLevel: 2 },
  { id: "avatar_5", emoji: "👩‍🎓", name: "Student", description: "Scholar avatar", unlockedAtLevel: 3 },
  { id: "avatar_6", emoji: "👩‍💻", name: "Coder", description: "Tech expert", unlockedAtLevel: 3 },
  { id: "avatar_7", emoji: "👩‍🔬", name: "Scientist", description: "Science enthusiast", unlockedAtLevel: 4 },
  { id: "avatar_8", emoji: "👩‍⚕️", name: "Doctor", description: "Medical professional", unlockedAtLevel: 4 },
  { id: "avatar_9", emoji: "👩‍🎨", name: "Artist", description: "Creative mind", unlockedAtLevel: 5 },
  { id: "avatar_10", emoji: "👩‍📚", name: "Librarian", description: "Knowledge seeker", unlockedAtLevel: 5 },
  { id: "avatar_11", emoji: "💃", name: "Dancer", description: "Energetic spirit", unlockedAtLevel: 6 },
  { id: "avatar_12", emoji: "🧘‍♀️", name: "Zen Master", description: "Peaceful avatar", unlockedAtLevel: 6 },
  { id: "avatar_13", emoji: "👩‍🚀", name: "Astronaut", description: "Space explorer", unlockedAtLevel: 7 },
  { id: "avatar_14", emoji: "👩‍🏫", name: "Teacher", description: "Knowledge giver", unlockedAtLevel: 7 },
  { id: "avatar_15", emoji: "🦸‍♀️", name: "Superhero", description: "Mighty hero", unlockedAtLevel: 8 },
  { id: "avatar_16", emoji: "🧗‍♀️", name: "Climber", description: "Achievement seeker", unlockedAtLevel: 8 },
  { id: "avatar_17", emoji: "👩‍🏃", name: "Athlete", description: "Quick learner", unlockedAtLevel: 9 },
  { id: "avatar_18", emoji: "🧝‍♀️", name: "Elf", description: "Magical being", unlockedAtLevel: 9 },
  { id: "avatar_19", emoji: "👸", name: "Princess", description: "Royal status", unlockedAtLevel: 10 },
  { id: "avatar_20", emoji: "🤴", name: "Noble", description: "Distinguished honor", unlockedAtLevel: 10 },
];

export const DECORATIONS: Decoration[] = [
  { id: "deco_crown", name: "Crown", emoji: "👑", unlockedAtLevel: 5, position: "top" },
  { id: "deco_star", name: "Star", emoji: "⭐", unlockedAtLevel: 6, position: "top" },
  { id: "deco_heart", name: "Heart", emoji: "💚", unlockedAtLevel: 7, position: "right" },
  { id: "deco_fire", name: "Fire", emoji: "🔥", unlockedAtLevel: 8, position: "top" },
  { id: "deco_halo", name: "Halo", emoji: "✨", unlockedAtLevel: 9, position: "top" },
  { id: "deco_medal", name: "Medal", emoji: "🏅", unlockedAtLevel: 10, position: "left" },
  { id: "deco_sparkles", name: "Sparkles", emoji: "💫", unlockedAtLevel: 5, position: "bottom" },
  { id: "deco_rainbow", name: "Rainbow", emoji: "🌈", unlockedAtLevel: 6, position: "bottom" },
  { id: "deco_diamond", name: "Diamond", emoji: "💎", unlockedAtLevel: 7, position: "right" },
  { id: "deco_moon", name: "Moon", emoji: "🌙", unlockedAtLevel: 8, position: "left" },
];

export function getUnlockedAvatars(level: number): Avatar[] {
  return GIRL_AVATARS.filter(avatar => avatar.unlockedAtLevel <= level);
}

export function getUnlockedDecorations(level: number): Decoration[] {
  return DECORATIONS.filter(deco => deco.unlockedAtLevel <= level);
}

export function getAvatarById(id: string): Avatar | undefined {
  return GIRL_AVATARS.find(avatar => avatar.id === id);
}

export function getDecorationById(id: string): Decoration | undefined {
  return DECORATIONS.find(deco => deco.id === id);
}
