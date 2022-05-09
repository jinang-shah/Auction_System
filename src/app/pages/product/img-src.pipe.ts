import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imgSrc",
})
export class ImgSrcPipe implements PipeTransform {
  transform(value: string): string {
    if (value.startsWith("http")) {
      return value;
    } else {
      return "http://localhost:8000/" + value;
    }
  }
}
