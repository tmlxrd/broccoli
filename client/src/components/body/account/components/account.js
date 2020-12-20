import React from 'react'

const AccountComp = (props) =>{
    return (
        <div>
                <img src={props.userData.userData.image} alt="user img" />
                <div>{`${props.userData.userData.passportData.ukr.surname} ${props.userData.userData.passportData.ukr.name} ${props.userData.userData.passportData.ukr.middleName}`}</div>
                <div>{`${props.userData.userData.passportData.eng.surname} ${props.userData.userData.passportData.eng.name} ${props.userData.userData.passportData.eng.middleName}`}</div>
                <div>
                  Навчальний план - {props.userData.userData.profession}, форма - {props.userData.userData.formOfEducation}, курс - {props.userData.userData.course}
                  ({props.userData.userData.entry})
                </div>
              </div>
    )
}

export default AccountComp