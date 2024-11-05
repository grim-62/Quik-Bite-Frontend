import CartCard from './CartCard';

const CartDetails = ({ itemdata }) => {
  const sampleItem = {
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with chicken and spices.',
    price: 12.99,
    quantity: 1,
    image:
      'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=',
  };

  return (
    <div className="h-screen w-screen ">
      {itemdata.map((e, i) => (
        <CartCard key={i} item={sampleItem} />
      ))}
    </div>
  );
};

export default CartDetails;
