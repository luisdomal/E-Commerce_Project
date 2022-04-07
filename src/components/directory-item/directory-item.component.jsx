import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, linkUrl } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(linkUrl);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
