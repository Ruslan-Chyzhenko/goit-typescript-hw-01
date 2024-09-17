type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Partial<AllType>>(
  top: T,
  bottom: T
): Pick<AllType, "name" | "position" | "color" | "weight"> {
  return {
    name: top.name || "",
    color: top.color || "",
    position: bottom.position || 0,
    weight: bottom.weight || 0,
  };
}
