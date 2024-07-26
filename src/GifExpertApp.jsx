import { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory )) return;
        setCategories([newCategory, ...categories]);
        //categories.push(newCategory);

    }
    return (
    <>
    <h1>gif expert app</h1>
    <AddCategory
        onNewCategory = {(event) => onAddCategory(event)}/>
        {
            categories.map( (category )=> (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
        }
    </>
    );
};
export default GifExpertApp;