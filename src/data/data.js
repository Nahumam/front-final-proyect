import SillonesVictorianos from "https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg"
import SillonesGrises from "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg"


export const productos = [
    {
        id: 0,
        name: "Sillones victorianos",
        image: <SillonesVictorianos/>,
        disponible: true
    },
    {
        id: 1,
        name: "Sillones Grises",
        image: <SillonesGrises/>,
        disponible: false
    }
]


export function getName(name) {
    return productos.find((productos) => productos.name === name);
}