import React from "react";
import omeletteImage from "./images/image-omelette.jpeg";

// balikan yung mga lists

const App: React.FC = () => {
  return (
    <div className="lg:bg-[#f3e5d8] lg:py-[120px]">
      <div className="bg-white lg:w-[735px] lg:mx-auto lg:p-10 rounded-3xl">
        <img
          src={omeletteImage}
          alt="an omelette"
          className="lg:mb-11 lg:rounded-3xl"
        />

        <main className="px-8 py-10 lg:px-0 lg:py-0 grid gap-y-9 bg-White">
          <section className="grid gap-y-9">
            <h1 className="text-3xl lg:text-4xl font-Young-Serif text-[#21201e] font-semibold">
              Simple Omelette Recipe
            </h1>

            <p className="w-[314px] landscape:w-full md:w-full text-[#21201e]">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>

            <div className="bg-[#fff7fc] p-6 rounded-xl">
              <h2 className="text-[#660b2e] font-bold text-lg mb-[25px]">
                Preparation Time
              </h2>

              <ul className="text-[#21201e] list-disc px-6 marker:text-[#660b2e]">
                <li>
                  <span className="font-bold text-[#5d5455]">Total:</span>{" "}
                  Approximately 10 minutes
                </li>
                <li>
                  <span className="font-bold text-[#5d5455]">Preparation:</span>{" "}
                  5 minutes
                </li>
                <li>
                  <span className="font-bold text-[#5d5455]">Cooking:</span> 5
                  minutes
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-Young-Serif text-subheadings text-2xl mb-9 font-bold">
              Ingredients
            </h2>

            <ul className="text-[#21201e] list-disc px-6 marker:text-subheadings">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-Young-Serif text-subheadings text-2xl mb-9 font-bold">
              Instructions
            </h2>

            <ol className="grid gap-y-5 list-decimal px-6 marker:text-subheadings marker:font-bold">
              <li>
                <span className="font-bold text-[#5d5455]">Beat the eggs:</span>{" "}
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li>
                <span className="font-bold text-[#5d5455]">Heat the pan:</span>{" "}
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li>
                <span className="font-bold text-[#5d5455]">
                  Cook the omelette:
                </span>{" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li>
                <span className="font-bold text-[#5d5455]">
                  Add fillings (optional):
                </span>{" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li>
                <span className="font-bold text-[#5d5455]">
                  Fold and serve:
                </span>{" "}
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </li>
              <li>
                <span className="font-bold text-[#5d5455]">Enjoy:</span> Serve
                hot, with additional salt and pepper if needed.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-Young-Serif text-subheadings text-2xl mb-9 font-bold">
              Nutrition
            </h2>

            <p className="mb-9">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <table className="text-left w-full grid gap-y-4">
              <tr className="grid grid-cols-2 px-8">
                <th className="font-semibold text-[#5f5e5a]">Calories</th>
                <td className="text-subheadings font-bold">277 kcal</td>
              </tr>
              <hr className="w-full bg-[#e0e0e0]" />
              <tr className="grid grid-cols-2 px-8">
                <th className="font-semibold text-[#5f5e5a]">Carbs</th>
                <td className="text-subheadings font-bold">0 g</td>
              </tr>
              <hr className="w-full bg-[#e0e0e0]" />
              <tr className="grid grid-cols-2 px-8">
                <th className="font-semibold text-[#5f5e5a]">Protein</th>
                <td className="text-subheadings font-bold">20 g</td>
              </tr>
              <hr className="w-full bg-[#e0e0e0]" />
              <tr className="grid grid-cols-2 px-8">
                <th className="font-semibold text-[#5f5e5a]">Fat</th>
                <td className="text-subheadings font-bold">22 g</td>
              </tr>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
