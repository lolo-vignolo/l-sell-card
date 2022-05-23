<ProductCard
product={MyProdcut}
key={MyProdcut.id}
initialValues={{ state: 5, maxCount: 10 }} >

{({
handleReset,
count,
handleIncrease,
isMaxCountReached,
maxCount,
product,
}) => (
<>
<ProductImage />
<ProductTitle />
<ProductButtons />
</>
)}
</ProductCard>
