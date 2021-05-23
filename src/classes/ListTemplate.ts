import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, pos: "start" | "end"): void {
        let li:HTMLLIElement = document.createElement('li');
        
        let h4:HTMLHeadingElement = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        let p:HTMLParagraphElement = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === "start") this.container.prepend(li);
        else this.container.append(li);
    }
};