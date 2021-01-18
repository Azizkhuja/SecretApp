const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-input").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#message-input").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#input-message");
  const encryted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encryted}`;
  linkInput.select();
});
