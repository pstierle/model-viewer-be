export class Util {
  public static modelUrl(modelId: number, userId: number): string {
    return `models/${userId}/${modelId}.glb`;
  }
}
