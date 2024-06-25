import {
  Collections,
  Collection,
  CollectionDetail,
  CollectionImg,
} from "./Home.styles";

const Home = () => {
  const collections = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "men's",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Collections>
      {collections.map(({ id, title, imageUrl }) => {
        return (
          <Collection key={id}>
            <CollectionImg style={{ backgroundImage: `url(${imageUrl})` }} />
            <CollectionDetail>
              <h3>{title.toUpperCase()}</h3>
              <p>SHOP NOW</p>
            </CollectionDetail>
          </Collection>
        );
      })}
    </Collections>
  );
};

export default Home;
