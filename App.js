// 导入App样式
import './App.css';
// 导入useState
import {useState} from "react"; 
// 导入style样式
//import './style.css';
// 导入Popup组件
import Popup from './Popup';
import EditPopup from './Edit';
import { useSelector, useDispatch } from 'react-redux';
import { setUniqueId } from './actions';

// 定义mystyle样式
const mystyle={
  fontSize:'20px',
  padding:'30px',
  margin:'20px',
  height:'3px',
  display:'inline-block',
  
}

function Product({ product, onEdit }) {
  const handleEdit = () => {
    onEdit(product);
  };

  return (
      <>
      <div style={mystyle} onClick={handleEdit}>{product.name}</div>
      <div style={mystyle} >{product.price}</div>
      <div style={mystyle} >{product.category}</div>
      </>
  );
}

// 定义App组件
function App() {
  const dispatch = useDispatch();
  const uniqueId = useSelector(state => state.uniqueId);
  // 定义isPopupOpen状态，初始值为false
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 定义data状态，初始值为空数
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  //const [selectedIndex, setselectedIndex] = useState(null);
  const largeBtnStyle = { fontSize: '20px', padding: '0.5rem 2rem' };
  
  // 定义handleAddData函数，接收newData参数，并设置data状态
  const handleAddData = (name,price,category,description) => {
    const id = new Date().getTime().toString();
    dispatch(setUniqueId(id));
    setData([...data, {id,name, price,category,description}]);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    //setselectedIndex(index);
    setShowPopup(true); // 打开弹窗
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = data.map((product) =>
    product.id === updatedProduct.id? updatedProduct : product
    );
    setData(updatedProducts);
    setShowPopup(false); // 关闭弹窗
  };

  // 返回div容器，包括App标题，打开弹窗按钮，弹窗内容，数据列表
  return (
    <div className="App">

      <h1>BookList</h1>
      <div style={{position:'absolute',right:'100px'}}>
      <button style={largeBtnStyle} onClick={() => setIsPopupOpen(true)}>Add</button>{}
      </div>
      {isPopupOpen && (
        <Popup
          onClose={() => setIsPopupOpen(false)}
          onAddData={handleAddData}
        />
      )}
      
        <div style={{
            display: 'flex',
            justifyContent: 'center',
          }
        }>
        <span style={{ fontWeight: 'bold',padding:'25px',marginRight: '20px',fontSize:'25px'}}>Name </span>
        <span style={{ fontWeight: 'bold',padding:'25px',marginRight: '20px' ,fontSize:'25px'}}>Price</span>
        <span style={{ fontWeight: 'bold',padding:'25px',marginRight: '20px',fontSize:'25px' }}>Category</span>
        </div>
      
       <div className='content'>
       
        {data.map((item,index) => (
            <div key={index}>
            <div style={mystyle}><Product product={item}  onEdit={handleEditProduct} ></Product></div>
            <button onClick={()=>{
              const newdata=[...data.slice(0,index),...data.slice(index+1)]
              setData(newdata);
              //const newData = data.filter((_,i)=>i!==index);
              //const newData = data.filter(item => item.id !== id);
              //setData(newData);
            }}>delete</button>
            
            </div>    
        ))} 
        {showPopup&&selectedProduct&&(
            <EditPopup
              product={selectedProduct}
              onUpdate={handleUpdateProduct}
              onClose={()=>setShowPopup(false)}
            />
        )}  
        
       </div>   
    </div>
  );
}

// 导出App组件
export default App;

