import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "./ai.js"

export default function Main() {
    let [myFavoriteThings, setFavThings] = React.useState([])
    let [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe != "" && recipeSection.current != null) {
            recipeSection.current.scrollIntoView({behavior:"smooth"})
            // const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            // window.scroll({
            //     top: yCoord,
            //     behavior: "smooth"
            // })
        }
    }, [recipe])
    async function getRecipe() {
        //setRecipeShown(recipeShown =>!recipeShown)
        const recipeMarkdown = await getRecipeFromMistral(myFavoriteThings)
        setRecipe(recipeMarkdown)

    }
    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredient")
        setFavThings([...myFavoriteThings, newIngredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" action={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"></input>
                <button>Add ingredient</button>
            </form>
            {myFavoriteThings.length > 0 && <IngredientsList ref={recipeSection} ingredients={myFavoriteThings} getRecipe={getRecipe} />}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}