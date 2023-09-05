import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const CartList = ({ cart, refetch }) => {
    const { _id, img, name, price, category, ratings, seller } = cart;

    const handleRemoveCart = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    refetch()
                }
            })
    }
    return (
        <div>
            <div className='flex justify-between items-center pr-5 bg-slate-300 '>
                <div className='flex'>
                    <div className='w-36 overflow-hidden'>
                        <img className='hover:scale-110 duration-500' src={img} alt="" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-lg font-semibold'>{name}</h1>
                        <p>Product Rating : {ratings}/5</p>
                        <p>Product Category : {category}</p>
                        <p>Author : {seller}</p>
                        <p>Product Price : {price} tk</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button onClick={() => handleRemoveCart(_id)}>
                        <MdDeleteOutline className="text-3xl shadow shadow-red-700 rounded-full" />
                    </button>
                    <button className="shadow shadow-green-600 p-2 rounded-md">
                        Order Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartList;