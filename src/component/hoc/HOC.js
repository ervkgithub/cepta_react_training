import React from "react";

const withHoc = (InputComponent, data) => {
    class OutputComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                tempInput: '',
                dataList: data,
                orgdatalist: data
            }
        }
        filterFn = (e) => {
            console.log(e.target.value);
            let tempFilterData
            tempFilterData = this.state.orgdatalist.filter((item) => {
                return item.indexOf(e.target.value) >= 0;
            })
            console.log(this.state.orgdatalist);
            console.log(this.tempFilterData);
            this.setState({
                tempInput: e.target.value,
                dataList: tempFilterData,
                orgdatalist: this.state.orgdatalist
            });
        }
        render() {
            return (
                <>
                    <br>
                    </br>
                    <div>HOC Demo</div>
                    <input type="text" value={this.state.tempInput} onChange={(e) => this.filterFn(e)} />
                    <InputComponent dataRet={this.state.dataList} />

                </>
            )
        }
    }
    return OutputComponent;
}

export default withHoc;