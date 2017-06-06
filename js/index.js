'use strict';//obliga escribir ECMA SCRIPT6

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //Append de componentes
  wrapper.append(Header());
  if (state.selectedMovie == null) {
    wrapper.append(MovieGrid( _ => {
      render(root);
    }));
  } else {
    wrapper.append(MovieDetails( _ => {
      render(root);
    }));
  }

  root.append(wrapper);
};
//es un objeto
const state = {
  movies: movies,
  selectedMovie: null
}

$( _ => {

  const root = $('.root');
  render(root);
});
