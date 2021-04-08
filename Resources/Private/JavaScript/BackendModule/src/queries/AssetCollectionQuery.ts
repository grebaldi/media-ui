import { gql } from '@apollo/client';

import { ASSET_COLLECTION_FRAGMENT } from './Fragments';

const ASSET_COLLECTION = gql`
    query ASSET_COLLECTION {
        assetCollection {
            ...AssetCollectionProps
        }
    }
    ${ASSET_COLLECTION_FRAGMENT}
`;

export default ASSET_COLLECTION;
