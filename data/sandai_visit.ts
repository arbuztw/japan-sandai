import SandaiType from "~/types/sandai_type";
import { SpotAttr, toSpotAttrArray } from "./spot_visit";
import { SANDAI_TYPE_SPOTS } from "./sandai_type_spots";
import Spot from "~/types/spot";

export class SandaiVisit {
  public sandaiType: SandaiType;
  public required_spots: Array<SpotAttr>;
  public optional_spots: Array<SpotAttr>;
  public numVisit;

  public constructor(sandaiType: SandaiType, visited: Record<Spot, Boolean>) {
    this.sandaiType = sandaiType;
    this.required_spots = toSpotAttrArray(
      SANDAI_TYPE_SPOTS[sandaiType].required,
      visited
    );
    this.optional_spots = toSpotAttrArray(
      SANDAI_TYPE_SPOTS[sandaiType].optional,
      visited
    );
    this.numVisit = computed(() => {
      let total_required = this.required_spots.length;
      return (
        this.required_spots.filter((attr) => attr.visited.value).length +
        Math.min(
          this.optional_spots.filter((attr) => attr.visited.value).length,
          3 - total_required
        )
      );
    });
  }
}
