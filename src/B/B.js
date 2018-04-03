import React, { Component } from 'react';
import { render } from "react-dom";


// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import checkboxHOC from "react-table/lib/hoc/selectTable";
//import './Gallery.css';

//import './App.css';

const API = 'https://jsonplaceholder.typicode.com/photos'
class B extends Component { 
  
    constructor(props) {
        super();
        this.state = {
            show : '',
            val: '',
            stringD:[],
            allData:[],
            data:[]
           
        };
    }



    componentWillMount = () => {
        fetch(API).then((Response)=>Response.json()).then((findResponse)=> {
       

            this.setState({
                allData:findResponse,
            })

            //console.log(this.state.allData);
        })
    }
   
   


    showPdata = () => {
        this.setState({ val: this.props.Pdata } )
        //console.log(this.state.val2)
    }

    showStringD = () =>{
        this.setState({
            stringD:this.props.stringD
        })
    }

    render() {

        var { data } = this.state;
        data = data.map((row) => {
            row.ImgPath = "this.state.thumbnailUrl";
            console.log('row.ImgPath')
            return row;
          });
       
        
        return (
            <div className="bpage">

                 {this.props.showPdata}
                <button onClick={this.showPdata} style={{color:"#a9a9a9",textAlign:"center", padding:"20",width:"90"}}> show Pdata </button>
                <p>{this.state.val}</p>
                {this.props.showStringD}
                <button onClick={this.showStringD}>string data</button>
                

            <table>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
                {
                    this.state.stringD.map((dataD)=> 
                    <tr>
                      
                        <td key={dataD.id}>{dataD}</td>           
                    </tr>               
                    )
                }
                </tbody>

            </table>

                  <ReactTable 
                    data={this.state.allData}
                    // loading={ true} //did't get
                    // showPagination= { true}
                    // showPaginationTop={true}
                    // showPaginationBottom={false}
                    // showPageSizeOptions={true}
                    // pageSizeOptions= {[5, 10, 20, 25, 50, 100]}
                    // showPageJump= {false} //did't get
                    // collapseOnSortingChange={true} //did't get
                    // collapseOnPageChange={false} //did't get
                    // collapseOnDataChange={true} //did't get
                    // sortable = { false }
                    // multiSort = {true} //did't get
                    // resizabl = {false}
                    // filterable = {true}
                    // defaultSortDesc = {true}
                    // loading={!this.state.allData}

                   
                    defaultPageSize={10}
                    style={{
                      height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                    columns={[
                        {
                        Header: "id",
                        accessor:"id"
                        
                        },
                        {
                            Header: "albumId",
                            accessor:"albumId"
                        
                        },
                        {
                            Header: "title",
                            accessor:"title"
                        
                        },
                        {
                            Header: "url",
                            accessor:"url"
                        
                        },
                        {
                            Header:'thumbnailUrl',
                            
                            Cell: (row) => {
                                return <div><img height={34} src={row.original.ImgPath}/></div>
                              },
                        }
                    
                    ]}

                    SubComponent={row => {
                        return (
                          <div style={{ padding: "20px" }}>
                            <h1>
                              Second component data
                            </h1>
                            <br />
                            <br />
                            <ReactTable
                              data={this.state.allData}
                              columns={[
                                {
                                Header: "id",
                                accessor:"id"
                                
                                },
                                {
                                    Header: "albumId",
                                    accessor:"albumId"
                                
                                },
                                {
                                    Header: "title",
                                    accessor:"title"
                                
                                },
                                {
                                    Header: "url",
                                    accessor:"url"
                                
                                }
                            
                            ]}

                            // pivotBy={["id", "albumId"]}
                            defaultPageSize={3}
                            showPagination={false}
                            //   SubComponent={row => {
                            //     return (
                            //       <div style={{ padding: "20px" }}>
                            //         Another Sub Component!
                            //       </div>
                            //     );
                            //   }}
                            />
                          </div>
                        );
                      }}
                    
                    />

               
           </div>  
           
        )
    }
}

export default B;
