import { gql } from 'apollo-boost';

// TODO: Split this big query into individual reusable pieces including the matching interfaces
export const ASSET_PROXIES = gql`
    query ASSET_PROXIES(
        $searchTerm: String
        $assetSource: String
        $assetCollection: String
        $assetType: String
        $tag: String
        $localOnly: Boolean
        $limit: Int
        $offset: Int
    ) {
        assetSourceFilter @client(always: true) @export(as: "assetSource")
        assetProxies(
            searchTerm: $searchTerm
            assetSource: $assetSource
            assetCollection: $assetCollection
            assetType: $assetType
            tag: $tag
            localOnly: $localOnly
            limit: $limit
            offset: $offset
        ) {
            identifier
            label
            mediaType
            filename
            fileSize
            fileTypeIcon {
                src
                alt
            }
            lastModified
            thumbnailUri
            previewUri
            iptcMetadata {
                key
                value
            }
            localAssetIdentifier
            localAssetData {
                identifier
                label
                title
                caption
                copyrightNotice
                tags {
                    label
                }
                assetCollections {
                    title
                }
            }
        }
        assetCollections {
            title
            tags {
                label
            }
        }
        assetSources {
            label
            identifier
            description
            iconUri
            readOnly
            supportsTagging
            supportsCollections
        }
        assetCount(
            searchTerm: $searchTerm
            assetSource: $assetSource
            assetCollection: $assetCollection
            assetType: $assetType
            tag: $tag
            localOnly: $localOnly
        )
        assetTypes {
            label
        }
        tags {
            label
        }
    }
`;
