import * as React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

const fakeProfileData = {
  name: "Tavares Hansen",
  isFavorite: true,
  photoUrl:
    "data:image/jpeg;base64,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",
  title: "Senior React/Redux Engineer",
  city: "Vancouver",
  country: "Canada",
  profileViews: 1234,
  websiteViews: 5678,
  avgRating: 4,
};

describe("Profile Card", () => {
  it("can render a profile card", () => {
    const tree = renderer
      .create(<Card {...fakeProfileData} isFavorite={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("can render a favorite profile card", () => {
    const tree = renderer.create(<Card {...fakeProfileData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
