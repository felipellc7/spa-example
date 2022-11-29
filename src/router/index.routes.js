import { pages } from "../controllers/index";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  console.log(route);

  switch (route) {
    case "/404": {
      return content.appendChild(pages.notFound());
    }
    default: {
      return content.appendChild(pages.home());
    }
  }
};

export { router };