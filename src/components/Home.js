import React, {Component} from 'react';
import './Style.css';
import './card.css';
import FullWidthTabs from './CenterTab';
import CustomizedTabs from './Tab';
import CheckBox from './CheckBox';
import SelectExpenseCategory from "./SelectExpenseCategory";
import SelectIncomeCategory from "./SelectIncomeCategory";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            drawerE: false,
            categoryE: '',
            drawerE: false,
            categoryE: '',
        }
        this.tab = React.createRef()
    }

    
  drawerOpenE = () => {
    this.setState({ drawerE: true });
    console.log('drawer open');
  };
  draweCloseE = () => {
    this.setState({ drawerE: false });
    console.log('drawer close');
  };
  selectedCatE = (tile) => {
    console.log('selected category home');
    this.tab.current.handleChangeExp(tile);
  };

  drawerOpenI = () => {
    this.setState({ drawerI: true });
    console.log('drawer open');
  };
  draweCloseI = () => {
    this.setState({ drawerI: false });
    console.log('drawer close');
  };
  selectedCatI = (tile) => {
    console.log('selected category home');
    this.tab.current.handleChangeInc(tile);
  };
    
    render(){
        return(
        <div>
        <div className="split1 left1"> <FullWidthTabs ref={this.tab} message={this.props.params.id} 
            drawerOpenE={this.drawerOpenE} drawerOpenI={this.drawerOpenI}/> 
        </div>
        <div className="split1 center1"style={{overflowX:"hidden", overflowY:"scroll"}}>
        <div className="split1 style">
        <CheckBox message={this.props.params.id}/>
        <SelectExpenseCategory message={this.props.params.id} 
              onSelectedCat={this.selectedCatE}  open={this.state.drawerE} onClose={this.draweCloseE}/>
        <SelectIncomeCategory message={this.props.params.id} 
              onSelectedCat={this.selectedCatI}  open={this.state.drawerI} onClose={this.draweCloseI}/>
        </div>
        </div>
        <div className="split1 right1"> 
        <div  className="header">
        
         {this.props.params.name}  
        
         </div>
        <CustomizedTabs message={this.props.params.id}/>
        </div>  
    </div>  
        )
    }
}
export default Home;




// export default function Home(props){

//   const [category, setCategory] = React.useState('');
//   const [drawer, setDrawer] = React.useState(false);
//   const tab = React.useRef();
  
// const drawerOpen = () => {
//   setDrawer(true);
//   console.log('drawer open');
// };
// const drawerClose = () => {
//   setDrawer(false);
//   console.log('drawer close');
// };
// const selectedCat = (tile) => {
//   setCategory(tile);
//   console.log(category);
//   console.log('selected category');
//   tab.current.handleChangeExp(category);
// };
  
 
//       return(
//       <div>
//       <div className="split1 left1"> <FullWidthTabs ref={tab} message={props.params.id} 
//           category={category} drawerOpen={drawerOpen}/> 
//       </div>
//       <div className="split1 center1"style={{overflowX:"hidden", overflowY:"scroll"}}>
//       <div className="split1 style">
//       <CheckBox message={props.params.id}/>
//       <SelectExpenseCategory message={props.params.id} 
//             onSelectedCat={selectedCat}  open={drawer} onClose={drawerClose}/>
//       </div>
//       </div>
//       <div className="split1 right1"> 
//       <div  className="header">
      
//        {props.params.name}  
      
//        </div>
//       <CustomizedTabs message={props.params.id}/>
//       </div>  
//   </div>  
//       )
//   }
