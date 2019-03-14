import { main } from "./index";

it("main", () => {
  expect(main(10)).toEqual(23);
  expect(main(1000)).toEqual(233168);
});
