export class Util {
  public static modelUrl(modelId: string, userId: string): string {
    return `http://localhost:3000/models/${userId}-${modelId}.glb`;
  }
}
