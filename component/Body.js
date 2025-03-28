
import { useEffect, useState } from "react";

export const Body = () => {
    const [allData, setAllData] = useState([]); 
    const [filteredData, setFilteredData] = useState([]); 
    const [selectedRecipe, setSelectedRecipe] = useState(0); 

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                setAllData(jsonData.recipes);
                setFilteredData(jsonData.recipes);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const filterRecipes = (category) => {
        if (category === "all") {
            setFilteredData(allData);
        } else {
            const filtered = allData.filter(recipe => 
                recipe.mealType.some(type => type.toLowerCase() === category.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <>
            {selectedRecipe ? (
                <div className="recipeselect-div">
                  
                    <h2>{selectedRecipe.name}</h2>
                    <img src={selectedRecipe.image}  />
                    <p><strong>cuisine:</strong> {selectedRecipe.cuisine}</p>
                    <p><strong>Rating:</strong> {selectedRecipe.rating}</p>
                    <p><strong>ingredients :</strong> {selectedRecipe.ingredients}</p>
                    <p><strong>instructions:</strong>{selectedRecipe.instructions}</p>
                  <a href="./"><button >Back</button></a>  
                </div>
            ) : (
                <>
                    <section>
                        <h1>With a passion for flavors and years of experience, our chef creates dishes that bring joy to every bite.</h1>
                        <img src="https://png.pngtree.com/png-clipart/20230317/ourmid/pngtree-cartoon-head-chef-png-image_6654127.png" alt="Chef" />
                    </section>
                    
                    <div className="btn-div">
                        <button onClick={() => filterRecipes("all")}>All</button>
                        <button onClick={() => filterRecipes("Dinner")}>Dinner</button>
                        <button onClick={() => filterRecipes("Lunch")}>Lunch</button>
                        <button onClick={() => filterRecipes("Snack")}>Snack</button>
                        <button onClick={() => filterRecipes("Dessert")}>Dessert</button>
                       
                    </div>

                    <div className="big-recipe-container">
                        {filteredData.length > 0 ? (
                            filteredData.map((elem, index) => (
                                <div className="recipe-div" key={index} onClick={() => setSelectedRecipe(elem)}>
                                    <img src={elem.image} alt={elem.name} />
                                    <p>{elem.name}</p>
                                    <p>Rating: {elem.rating}</p>
                                </div>
                            ))
                        ) : (
                            <p>No recipes found</p>
                        )}
                    </div>
                </>
            )}
        </>
    );
};
