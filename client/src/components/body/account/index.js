import React from "react";
import AccountComp from './components/account'
import SubjectsComp from "./components/subjects";

// const Account = (props) => {
//   if (!props.userData.isLogged) {
//     return "не дозволено";
//   } else {
//     return (
//       <div>
//         <div>
//           <img src={props.userData.userData.image} alt="user img" />
//           <div>{`${props.userData.userData.passportData.ukr.surname} ${props.userData.userData.passportData.ukr.name} ${props.userData.userData.passportData.ukr.middleName}`}</div>
//           <div>{`${props.userData.userData.passportData.eng.surname} ${props.userData.userData.passportData.eng.name} ${props.userData.userData.passportData.eng.middleName}`}</div>
//           <div>
//             Навчальний план - {props.userData.userData.profession}, форма - {props.userData.userData.formOfEducation}, курс - {props.userData.userData.course}
//             ({props.userData.userData.entry})
//           </div>
//         </div>
//         <div>всі список предметів і ссилка на них</div>
//       </div>
//     );
//   }
// };

class AccountPage extends React.Component {

  render(){
    console.log(this.props);
    dsadasd
    if (!this.props.userData.isLogged) {
          return "не дsssозволено";
        } else {d
          return (<>
            <AccountComp userData={this.props.userData} />
            <SubjectsComp />
          </>);
        }
  }
}

export default AccountPage;
