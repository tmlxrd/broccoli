import React from "react";
import StudentComp from './components/student-component'
import SubjectsComp from "./components/subjects";
import TeacherComp from './components/teacher-component'

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
    if (!this.props.userData.isLogged) {
          return "не дозволено";
        } else {
          if(this.props.userData.userData.role==="teacher"){
            return <TeacherComp userData={this.props.userData.userData} />
          } else {
          return (<>
            <StudentComp userData={this.props.userData.userData} />
            <SubjectsComp />
          </>)}
        }
  }
}

export default AccountPage;
