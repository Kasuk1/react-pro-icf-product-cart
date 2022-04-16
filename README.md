# ICF-ProductCart

This is a test package deployed in NPM.

### Igor Chinchay Farroñay

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'icf-product-cart';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ count, reset, isMaxCountReached, increaseBy }) => (
        <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
        </>
    )}
</ProductCard>
```
