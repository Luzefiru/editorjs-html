import { OutputBlockData } from "@editorjs/editorjs";

export const list = ({ data }: OutputBlockData) => {
    const listStyle = data.style === "unordered" ? "ul" : "ol";

    const recursor = (items: any, listStyle: string) => {
      const list = items.map((item: any) => {
        if (!item.content && !item.items) return `<li>${item}</li>`;

        let list = "";
        if (item.items) list = recursor(item.items, listStyle);
        if (item.content) return `<li> ${item.content} ${list} </li>`;
      });

      return `<${listStyle}>${list.join("")}</${listStyle}>`;
    };

    return recursor(data.items, listStyle);
}