

const GymDetails = ({item}) => {
    const{name,category,price}=item
    
    return (
        <div className="border p-7 rounded-xl bg-blue-600 font-bold">
            <p className="text-3xl">Name:{name}</p>
            <p className="text-2xl">category:{category}</p>
            <p className="text-xl">Price:{price}</p>
            <button className="bg-green-500 p-2 rounded-xl hover:bg-green-800 w-full">Buy Now</button>
            
        </div>
    );
};

export default GymDetails;