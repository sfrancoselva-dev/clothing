import { useEffect } from "react";
import {
  Collections,
  Collection,
  CollectionDetail,
  CollectionImg,
} from "./Home.styles";

import { useDispatch, useSelector } from "react-redux";
import { actionFetchingCollection } from "../../store/collections/collection.action";
import {
  selectCollection,
  selectFetchedStatus,
} from "../../store/collections/collection.selector";

const Home = () => {
  const dispatch = useDispatch();
  const collection = useSelector(selectCollection);
  const isCollectionFetched = useSelector(selectFetchedStatus);

  useEffect(() => {
    !isCollectionFetched && dispatch(actionFetchingCollection());
  }, []);

  return (
    <Collections>
      {collection &&
        collection
          .sort((current, next) => current.id - next.id)
          .map(({ id, title, link, imageUrl }) => {
            return (
              <Collection key={id} to={`/shop/${link}`}>
                <CollectionImg
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
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
