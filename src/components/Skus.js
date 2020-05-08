import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { Preview } from '@components';
import { mixins } from '@styles';

const StyledWrapper = styled.div`
    ${mixins.gridTemplate};
    ${mixins.fullHeight};
`;

const Skus = () => {
    const skus = useStaticQuery(query);

    return(
        <StyledWrapper>
            {skus.allStripeSku.edges.map(({ node: sku }) => {
                const newSku = {
                    sku: sku.id,
                    name: sku.attributes.name,
                    value: sku.price,
                    currency: sku.currency,
                    featuredImage: sku.localFiles[0].childImageSharp.fluid,
                }
                return <Preview key={sku.id} sku={newSku} />
            })}
        </StyledWrapper>
    )
}; 

const query = graphql`
  {
    allStripeSku {
        edges {
          node {
            id
            currency
            price
            attributes {
              name
            }
            localFiles {
              childImageSharp {
                fluid(maxWidth: 250) {
                    src
                    srcSet
                    sizes
                }
              }
            }
          }
        }
      }
    }
`

export default Skus;
