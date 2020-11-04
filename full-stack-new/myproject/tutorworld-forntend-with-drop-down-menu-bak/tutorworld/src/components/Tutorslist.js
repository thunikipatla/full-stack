import React from 'react';


class TutorsList extends React.Component{

     rendertutorslist(){  
            var tutorslist = this.props.tutors.map((tutor)=>{
                // console.log('console from renderlist',tutor);
                return (
            //     <li key={tutor.firstname}>
            //     Name: {tutor.firstname} {'\n'}
            //           {tutor.lastname} {'\n'}
            //     Email: {tutor.email}  {'\n'}
            //     Total Experience: {tutor.experience}  {'\n'}
            //     Qualification: {tutor.qualification}  {'\n'}
            //     Subjects: {tutor.subjects}  {'\n'}
            //    Prefred timings: {tutor.timings}  {'\n'}
            //    Phonenumber: {tutor.phone} {'\n'}
            //     </li>
            
                <tr>
                         <th scope="row">.</th>
                         <td>{tutor.firstname}</td>
                         <td>{tutor.lastname}</td>
                         <td>{tutor.email}</td>
                         <td>{tutor.experience}</td>
                         <td>{tutor.qualification}</td>
                         <td>{tutor.subjects}</td>
                         <td>{tutor.timings}</td>
                         <td>{tutor.phone}</td>
                         <td><button onClick="" class="btn btn-success">RequestDemo</button></td>
                        
                </tr>
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
               {/* <ul>
                    {this.rendertutorslist()}
                </ul> */}
             <table class="table table-hover table-bordered">
                 <thead class="table table-hover table-bordered">
                      <tr>
                          <th>#</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th>Total Experience</th>
                         <th>Qualification</th>
                         <th>Subjects</th>
                         <th>Prefred timings</th>
                         <th>Phonenumber</th>
                         <th>DemoLink</th>                  
                     </tr>
                 </thead>
                 <tbody>
                 {this.rendertutorslist()}
                 </tbody>
             </table>
            
            
            </div>
        )
    }
}

export default TutorsList;