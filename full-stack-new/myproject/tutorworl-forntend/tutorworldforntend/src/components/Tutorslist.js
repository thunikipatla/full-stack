import React from 'react';


class TutorsList extends React.Component{

    rendertutorslist(){  

            var tutorslist = this.props.tutors.map((tutor)=>{
                // console.log('console from renderlist',tutor);
                return (
                <li key={tutor.firstname}>
                Name: {tutor.firstname} {'\n'}
                      {tutor.lastname} {'\n'}
                Email: {tutor.email}  {'\n'}
                Total Experience: {tutor.experience}  {'\n'}
                Qualification: {tutor.qualification}  {'\n'}
                Subjects: {tutor.subjects}  {'\n'}
               Prefred timings: {tutor.timings}  {'\n'}
               Phonenumber: {tutor.phone} {'\n'}
                </li>
                )
            })
    
        
        return tutorslist;
        
    }
    render(){
        // console.log('Tutors console',this.props.tutors[0])
        return(
            <div>
                {/* <h1>This is from Tutors List</h1> */}
                {/* {this.props.tutors.length} */}
                <ul>
                    {this.rendertutorslist()}
                </ul>
            </div>
        )
    }
}

export default TutorsList;