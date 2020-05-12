import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { SEO, Preview } from '@components'; 
import { mixins } from '@styles';

const StyledWrapper = styled.main`
    ${mixins.gridTemplate};
    ${mixins.fullHeight};
`;

const IndexPage = () => {
  const skus = useStaticQuery(query);

  return (
    <>
      <SEO title='Sneaker Store' />
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
    </>
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

export default IndexPage;