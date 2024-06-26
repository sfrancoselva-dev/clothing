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
      link: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      link: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      link: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women's",
      link: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "men's",
      link: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <Collections>
      {collections.map(({ id, title, link, imageUrl }) => {
        return (
          <Collection key={id} to={`/shop/${link}`}>
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
