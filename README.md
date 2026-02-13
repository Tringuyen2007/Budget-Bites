# 🍽️ Budget Bites

A fitness-focused calorie & budget tracking app built with **React + Vite**. Track your daily food intake, manage meal categories, set calorie goals, and keep an eye on your grocery budget — all in one place.

## ✨ Features

- **📊 Dashboard** — View your daily calorie goal with an inline editor to adjust it on the fly
- **🍳 Food Log** — Log meals across Breakfast, Lunch, Dinner & Snacks with a tabbed modal interface
- **🔥 Streak Tracker** — Animated fire icon showing your consecutive logging streak
- **💰 Budget Tracker** — Set and update a weekly grocery budget
- **👤 Profile** — Upload and preview a profile photo

## 🛠️ Tech Stack

| Layer     | Technology                      |
| --------- | ------------------------------- |
| Framework | React 19                        |
| Bundler   | Vite                            |
| Routing   | React Router DOM                |
| Styling   | Vanilla CSS (single stylesheet) |
| Linting   | ESLint                          |

## 📁 Project Structure

```
src/
├── main.jsx                 # Entry point — mounts <App /> into the DOM
├── App.jsx                  # Router setup & shared state (goalCalories)
├── GlobalStyle.css          # All application styles
│
├── pages/
│   ├── Dashboard.jsx        # Home — calorie goal display & editor
│   ├── Foodlog.jsx          # Meal logging — categories + modal
│   ├── Budget.jsx           # Grocery budget tracker
│   └── Profile.jsx          # User profile & image upload
│
└── components/
    ├── Navbar.jsx            # Fixed bottom navigation bar
    ├── CalorieDisplay.jsx    # Editable calorie goal widget
    ├── StreakDisplay.jsx     # Day-streak counter with fire animation
    ├── MealSelect.jsx        # Meal category card (list + add button)
    ├── AddFood.jsx           # Standalone food entry form
    ├── AddFoodModal.jsx      # Modal with tabbed food entry
    ├── AddFoodTab.jsx        # "Add Food" search tab
    ├── MyMealsTab.jsx        # "My Meals" tab (placeholder)
    └── MyRecipesTab.jsx      # "My Recipes" tab (placeholder)
```

## 🔄 Data Flow

```
App.jsx  ← owns goalCalories state
 ├─ Dashboard  ← goalCalories + setGoalCalories
 │    └─ CalorieDisplay  ← renders / edits the goal
 ├─ FoodLog  ← goalCalories (read-only)
 │    ├─ StreakDisplay
 │    ├─ MealSelect × 4
 │    └─ AddFoodModal
 │         ├─ AddFoodTab
 │         ├─ MyRecipesTab
 │         └─ MyMealsTab
 ├─ Budget  (independent state)
 └─ Profile  (independent state)
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📝 Roadmap

- [ ] Wire up food logging so saved items update calories consumed
- [ ] Persist data with `localStorage` or a backend
- [ ] Add streak calculation logic
- [ ] Add height, weight, and goal settings to Profile
- [ ] Split CSS into component-level modules
- [ ] Integrate a nutrition API for food search
- [ ] Backend with FastAPI + PostgreSQL
- [ ] AI-generated meal plans & grocery lists
