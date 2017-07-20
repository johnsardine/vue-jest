import App from '@/App.vue';

describe('App component', () => {
  it('Component', () => {
    expect(App.components).toHaveProperty('Hello');
  });
});
