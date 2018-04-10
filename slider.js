import { React, ReactDOM, openSdk, Button, propTypes, Slider, Icon } from '@alife/icbu-mod-lib';
import './index.scss';

class Yu_btDom extends React.Component {
  render() {
    const picbox = <div className={'yu_btcss'} style={{
        display: this.props.yu_btlx
      }}>
      <img src={this.props.yu_bttpdz
          ? this.props.yu_bttpdz
          : 'https://img.alicdn.com/imgextra/i3/3528491912/TB2nI.wkh1YBuNjy1zcXXbNcXXa-3528491912.jpg'}/>
      <div className={'yu_wz'}>
        <div className={'yu_dwz'}>
          <span style={{
              color: this.props.dbtcolor
            }}>{this.props.yu_btdwz}</span>
        </div>
        <div className={'yu_xwz'} >
          <span style={{color:this.props.xbtcolor}}>{this.props.yu_btxwz}</span>
        </div>
      </div>
    </div>;
    if (this.props.yu_bttplj) {
      return (<a href={this.props.yu_bttplj} target="_blank">{picbox}</a>);
    }
    return (<div>{picbox}</div>);
  }
}



class Yu_Dom extends React.Component {
    render() {
        const {item} = this.props;
        let gdtpLeft='140px';
        if(item.rownumber==4){
          gdtpLeft='90px';
        }
        if(item.rownumber==5){
          gdtpLeft='60px';
        }
 const yu_divarr1 =
 <div className={'yu_bb'}>
    <div className={'yu_bbwbk'}  style={{marginLeft:'0px',width:item.bbwidth}}>
        <div className={'yu_bbnbk'} style={{width:item.bbwidth}}>
            <div className={'yu_bbtp'}  style={{width:item.bbwidth,height:item.bbwidth}}>
            <a href={item.url1} target="_blank"><img src={item.img1} style={{width:item.bbwidth,height:item.bbwidth}}/></a>
            <div className={'yu_bbhover'} style={{width:item.bbwidth,height:item.bbwidth}}>
                <div className={'yu_bbbt'} style={{display:item.yu_bbbt,width:item.bbwidth}}>
                <span style={{color:item.bbbtcolor}}>{item.bt1}</span>
                </div>
                <div className={'yu_bbdd'} style={{display:item.yu_bbdd,width:item.bbwidth}}>
                <span style={{color:item.bblxcolor}}>Min.order : {item.dd1}</span>
                </div>
            </div>
            </div>
            <div className={'yu_bbjg'} style={{display:item.yu_bbjg,width:item.bbwidth}}>
              <span style={{color:item.bbjgcolor}}>{item.yu_jgqz}{item.jg1}</span>
            </div>
            <div className={'yu_bbwz'} style={{display:item.yu_bbdbwz_display,width:item.bbwidth}}>
                  <a href={item.url1} target="_blank">    <img src={item.bbdbtp} style={{marginLeft:gdtpLeft}}/> </a>
            </div>
      </div>
    </div>
</div>
const yu_divarr2=
<div className={'yu_bb'}>
    <div className={'yu_bbwbk'}  style={{marginLeft:item.marginLf,width:item.bbwidth}}>
        <div className={'yu_bbnbk'} style={{width:item.bbwidth}}>
                  <div className={'yu_bbtp'}  style={{width:item.bbwidth,height:item.bbwidth}}>
                      <a href={item.url2} target="_blank"><img src={item.img2} style={{width:item.bbwidth,height:item.bbwidth}}/></a>
                      <div className={'yu_bbhover'} style={{width:item.bbwidth,height:item.bbwidth}}>
                          <div className={'yu_bbbt'} style={{display:item.yu_bbbt,width:item.bbwidth}}>
                          <span style={{color:item.bbbtcolor}}>{item.bt2}</span>
                          </div>
                          <div className={'yu_bbdd'} style={{display:item.yu_bbdd,width:item.bbwidth}}>
                          <span style={{color:item.bblxcolor}}>Min.order : {item.dd2}</span>
                          </div>
                      </div>
                  </div>
                  <div className={'yu_bbjg'} style={{display:item.yu_bbjg,width:item.bbwidth}}>
                    <span style={{color:item.bbjgcolor}}>{item.yu_jgqz}{item.jg2}</span>
                  </div>
                  <div className={'yu_bbwz'} style={{display:item.yu_bbdbwz_display,width:item.bbwidth}}>
                          <a href={item.url2} target="_blank">    <img src={item.bbdbtp} style={{marginLeft:gdtpLeft}}/> </a>
                  </div>
        </div>
    </div>
</div>
const yu_divarr3=
<div className={'yu_bb'}>
                      <div className={'yu_bbwbk'}  style={{marginLeft:item.marginLf,width:item.bbwidth}}>
                      <div className={'yu_bbnbk'} style={{width:item.bbwidth}}>
                      <div className={'yu_bbtp'}  style={{width:item.bbwidth,height:item.bbwidth}}>
                      <a href={item.url3} target="_blank"><img src={item.img3} style={{width:item.bbwidth,height:item.bbwidth}}/></a>
                      <div className={'yu_bbhover'} style={{width:item.bbwidth,height:item.bbwidth}}>
                          <div className={'yu_bbbt'} style={{display:item.yu_bbbt,width:item.bbwidth}}>
                          <span style={{color:item.bbbtcolor}}>{item.bt3}</span>
                          </div>
                          <div className={'yu_bbdd'} style={{display:item.yu_bbdd,width:item.bbwidth}}>
                          <span style={{color:item.bblxcolor}}>Min.order : {item.dd3}</span>
                          </div>
                      </div>
                  </div>
                  <div className={'yu_bbjg'} style={{display:item.yu_bbjg,width:item.bbwidth}}>
                    <span style={{color:item.bbjgcolor}}>{item.yu_jgqz}{item.jg3}</span>
                  </div>
                  <div className={'yu_bbwz'} style={{display:item.yu_bbdbwz_display,width:item.bbwidth}}>
                          <a href={item.url3} target="_blank">    <img src={item.bbdbtp} style={{marginLeft:gdtpLeft}}/></a>
                  </div>
                    </div>
                    </div>
</div>

 const yu_divarr4=<div className={'yu_bb'}>
                      <div className={'yu_bbwbk'}  style={{marginLeft:item.marginLf,width:item.bbwidth}}>
                      <div className={'yu_bbnbk'} style={{width:item.bbwidth}}>
                      <div className={'yu_bbtp'}  style={{width:item.bbwidth,height:item.bbwidth}}>
                      <a href={item.url4} target="_blank"><img src={item.img4} style={{width:item.bbwidth,height:item.bbwidth}}/></a>
                      <div className={'yu_bbhover'} style={{width:item.bbwidth,height:item.bbwidth}}>
                          <div className={'yu_bbbt'} style={{display:item.yu_bbbt,width:item.bbwidth}}>
                          <span style={{color:item.bbbtcolor}}>{item.bt4}</span>
                          </div>
                          <div className={'yu_bbdd'} style={{display:item.yu_bbdd,width:item.bbwidth}}>
                          <span style={{color:item.bblxcolor}}>Min.order : {item.dd4}</span>
                          </div>
                      </div>
                  </div>
                  <div className={'yu_bbjg'} style={{display:item.yu_bbjg,width:item.bbwidth}}>
                    <span style={{color:item.bbjgcolor}}>{item.yu_jgqz}{item.jg4}</span>
                  </div>
                  <div className={'yu_bbwz'} style={{display:item.yu_bbdbwz_display,width:item.bbwidth}}>
                            <a href={item.url4} target="_blank">    <img src={item.bbdbtp} style={{marginLeft:gdtpLeft}}/></a>
                  </div>
                    </div>
                    </div>
</div>


 const yu_divarr5=<div className={'yu_bb'}>
                      <div className={'yu_bbwbk'}  style={{marginLeft:item.marginLf,width:item.bbwidth}}>
                      <div className={'yu_bbnbk'} style={{width:item.bbwidth}}>
                      <div className={'yu_bbtp'}  style={{width:item.bbwidth,height:item.bbwidth}}>
                      <a href={item.url5} target="_blank"><img src={item.img5} style={{width:item.bbwidth,height:item.bbwidth}}/></a>
                      <div className={'yu_bbhover'} style={{width:item.bbwidth,height:item.bbwidth}}>
                          <div className={'yu_bbbt'} style={{display:item.yu_bbbt,width:item.bbwidth}}>
                          <span style={{color:item.bbbtcolor}}>{item.bt5}</span>
                          </div>
                          <div className={'yu_bbdd'} style={{display:item.yu_bbdd,width:item.bbwidth}}>
                          <span style={{color:item.bblxcolor}}>Min.order : {item.dd5}</span>
                          </div>
                      </div>
                  </div>
                  <div className={'yu_bbjg'} style={{display:item.yu_bbjg,width:item.bbwidth}}>
                    <span style={{color:item.bbjgcolor}}>{item.yu_jgqz}{item.jg5}</span>
                  </div>
                  <div className={'yu_bbwz'} style={{display:item.yu_bbdbwz_display,width:item.bbwidth}}>
                            <a href={item.url5} target="_blank">    <img src={item.bbdbtp} style={{marginLeft:gdtpLeft}}/> </a>
                  </div>
                    </div>
                    </div>
</div>
              if(item.rownumber==3){return (<div className={'yu_ztcss'}>{yu_divarr1}{yu_divarr2}{yu_divarr3}</div>);}
  if(item.rownumber==4){return (<div className={'yu_ztcss'}>{yu_divarr1}{yu_divarr2}{yu_divarr3}{yu_divarr4}</div>);}
            return (<div className={'yu_ztcss'}>{yu_divarr1}{yu_divarr2}{yu_divarr3}{yu_divarr4}{yu_divarr5}</div>);
        }
    }


    class IntlIcbuSmodDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasData: false
        }
    }


    componentWillMount() {
        const moduleData = this.props.moduleData;
        const { mds, gdc }  = moduleData;
        let yu_data = new Array();
        const fetch =openSdk.fetch('icbu.data.product.list',{bizId: gdc.bizId,strategyName: 'manuallySelect',countNumber: 15,products:mds.products});
        fetch.then((data)=>{
            if(data.success){
            yu_data = data.result;
            for(let i=yu_data.length; i<20 ; i++){
                yu_data[i] = {
                    'productImage': {'url':{
                            'x350':'https://img.alicdn.com/imgextra/i3/3528491912/TB25_eObXOWBuNjy0FiXXXFxVXa_!!3528491912.jpg'}
                    },
                    'productUrl': 'https://www.alibaba.com/',
                    'productSubject':'Please choose the goods you want to show',
                    'minOrderQuantity':'1000',
                    'fobPriceWithoutUnit':'US：$5000-8000',
                };
            }
            this.setState({moddate:yu_data});
        }else{
            for(let i=0; i<20 ; i++){
                yu_data[i] = {
                    'productImage': {'url':{
                            'x350':'https://img.alicdn.com/imgextra/i3/3528491912/TB25_eObXOWBuNjy0FiXXXFxVXa_!!3528491912.jpg'}
                    },
                    'productUrl': 'https://www.alibaba.com/',
                    'productSubject':'Please choose the goods you want to show',
                    'minOrderQuantity':'1000',
                    'fobPriceWithoutUnit':'US：$5000-8000',
                };
            }

            this.setState({moddate:yu_data});
        };
    })
    }




    render() {
        const {hasData, moduleTitle} = this.state;
        const {mds} = this.props.moduleData;
//颜色
    let dbtcolor = (
      mds.moduleData.yu_dbtcolor
      ? mds.moduleData.yu_dbtcolor
      : '#000000');
      let xbtcolor=(mds.moduleData.yu_xbtcolor ? mds.moduleData.yu_xbtcolor : '#ffffff' );

    let bbbtcolor = (
      mds.moduleData.yu_bbbtcolor
      ? mds.moduleData.yu_bbbtcolor
      : '#ffffff');
    let bblxcolor = (
      mds.moduleData.yu_bblxcolor
      ? mds.moduleData.yu_bblxcolor
      : '#ffffff');
    let bbjgcolor = (
      mds.moduleData.yu_bbjgcolor
      ? mds.moduleData.yu_bbjgcolor
      : '#ffffff');
      let bbdbwzcolor = (
        mds.moduleData.yu_bbdbwzcolor
        ? mds.moduleData.yu_bbdbwzcolor
        : '#ffffff');

        let bbdbwz = (
          mds.moduleData.yu_bbdbwz
          ? mds.moduleData.yu_bbdbwz
          : 'QUALITY ASSURANCE OF GOOD');

        let yu_btlx=mds.moduleData.yu_btlx;
        let yu_btdwz=mds.moduleData.yu_btdwz;
        let yu_bttpdz=mds.moduleData.yu_bttpdz;
        let yu_bttplj=mds.moduleData.yu_bttplj;
        let yu_btxwz=mds.moduleData.yu_btxwz;

        let yu_bbbt=mds.moduleData.yu_bbbt;
        let yu_bbdd=mds.moduleData.yu_bbdd;
        let yu_bbjg=mds.moduleData.yu_bbjg;
        let yu_jgqz=(mds.moduleData.yu_jgqz ? mds.moduleData.yu_jgqz : '' );
        let yu_count=mds.moduleData.countNumber;
        let yu_topjg=(mds.moduleData.yu_topjg ? mds.moduleData.yu_topjg : 0 );
        yu_topjg = yu_topjg + 'px';
        let yu_bottomjg=(mds.moduleData.yu_bottomjg ? mds.moduleData.yu_bottomjg : 75 );
        yu_bottomjg = yu_bottomjg + 'px';
        let yu_bjys=(mds.moduleData.yu_bjys ? mds.moduleData.yu_bjys : '#ffffff' );
		let yu_bbdbwz_display=mds.moduleData.yu_bbdbwz_display;
        let bbwidth='380px' ;

        let bbdbtp=(mds.moduleData.yu_bbdbtp ? mds.moduleData.yu_bbdbtp : 'https://img.alicdn.com/imgextra/i1/3528491912/TB2KuHXj1uSBuNjSsziXXbq8pXa-3528491912.png' );
        let rownumber=mds.moduleData.yu_rownumber;
        let marginLf='30px';

        let yu_lbsz = [
            { url1: this.state.moddate[0].productUrl,img1:this.state.moddate[0].productImage.url.x350,
            bt1: this.state.moddate[0].productSubject,dd1:this.state.moddate[0].minOrderQuantity,
            jg1:this.state.moddate[0].fobPriceWithoutUnit,url2: this.state.moddate[1].productUrl,img2:this.state.moddate[1].productImage.url.x350,
            bt2: this.state.moddate[1].productSubject,dd2:this.state.moddate[1].minOrderQuantity,
            jg2:this.state.moddate[1].fobPriceWithoutUnit,url3: this.state.moddate[2].productUrl,img3:this.state.moddate[2].productImage.url.x350,
            bt3: this.state.moddate[2].productSubject,dd3:this.state.moddate[2].minOrderQuantity,
            jg3:this.state.moddate[2].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
            bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,
            yu_bbdd:yu_bbdd,yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:3},
            { url1: this.state.moddate[3].productUrl,img1:this.state.moddate[3].productImage.url.x350,
            bt1: this.state.moddate[3].productSubject,dd1:this.state.moddate[3].minOrderQuantity,
            jg1:this.state.moddate[3].fobPriceWithoutUnit,url2: this.state.moddate[4].productUrl,img2:this.state.moddate[4].productImage.url.x350,
            bt2: this.state.moddate[4].productSubject,dd2:this.state.moddate[4].minOrderQuantity,
            jg2:this.state.moddate[4].fobPriceWithoutUnit,url3: this.state.moddate[5].productUrl,img3:this.state.moddate[5].productImage.url.x350,
            bt3: this.state.moddate[5].productSubject,dd3:this.state.moddate[5].minOrderQuantity,
            jg3:this.state.moddate[5].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
            bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,
            yu_bbdd:yu_bbdd,yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:3},
            { url1: this.state.moddate[6].productUrl,img1:this.state.moddate[6].productImage.url.x350,
            bt1: this.state.moddate[6].productSubject,dd1:this.state.moddate[6].minOrderQuantity,
            jg1:this.state.moddate[6].fobPriceWithoutUnit,url2: this.state.moddate[7].productUrl,img2:this.state.moddate[7].productImage.url.x350,
            bt2: this.state.moddate[7].productSubject,dd2:this.state.moddate[7].minOrderQuantity,
            jg2:this.state.moddate[7].fobPriceWithoutUnit,url3: this.state.moddate[8].productUrl,img3:this.state.moddate[8].productImage.url.x350,
            bt3: this.state.moddate[8].productSubject,dd3:this.state.moddate[8].minOrderQuantity,
            jg3:this.state.moddate[8].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
            bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
            yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:3}
        ];
         if(rownumber=='4'){
          bbwidth='280px';
          marginLf='26px';
          yu_lbsz = [
               { url1: this.state.moddate[0].productUrl,img1:this.state.moddate[0].productImage.url.x350,
               bt1: this.state.moddate[0].productSubject,dd1:this.state.moddate[0].minOrderQuantity,
               jg1:this.state.moddate[0].fobPriceWithoutUnit,url2: this.state.moddate[1].productUrl,img2:this.state.moddate[1].productImage.url.x350,
               bt2: this.state.moddate[1].productSubject,dd2:this.state.moddate[1].minOrderQuantity,
               jg2:this.state.moddate[1].fobPriceWithoutUnit,url3: this.state.moddate[2].productUrl,img3:this.state.moddate[2].productImage.url.x350,
               bt3: this.state.moddate[2].productSubject,dd3:this.state.moddate[2].minOrderQuantity,
               jg3:this.state.moddate[2].fobPriceWithoutUnit,url4: this.state.moddate[3].productUrl,img4:this.state.moddate[3].productImage.url.x350,
               bt4: this.state.moddate[3].productSubject,dd4:this.state.moddate[3].minOrderQuantity,
               jg4:this.state.moddate[3].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
               bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
               yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:4},
               { url1: this.state.moddate[4].productUrl,img1:this.state.moddate[4].productImage.url.x350,
               bt1: this.state.moddate[4].productSubject,dd1:this.state.moddate[4].minOrderQuantity,
               jg1:this.state.moddate[4].fobPriceWithoutUnit,url2: this.state.moddate[5].productUrl,img2:this.state.moddate[5].productImage.url.x350,
               bt2: this.state.moddate[5].productSubject,dd2:this.state.moddate[5].minOrderQuantity,
               jg2:this.state.moddate[5].fobPriceWithoutUnit,url3: this.state.moddate[6].productUrl,img3:this.state.moddate[6].productImage.url.x350,
               bt3: this.state.moddate[6].productSubject,dd3:this.state.moddate[6].minOrderQuantity,
               jg3:this.state.moddate[6].fobPriceWithoutUnit,url4: this.state.moddate[7].productUrl,img4:this.state.moddate[7].productImage.url.x350,
               bt4: this.state.moddate[7].productSubject,dd4:this.state.moddate[7].minOrderQuantity,
               jg4:this.state.moddate[7].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
               bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,
               yu_bbdd:yu_bbdd,yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:4},
               { url1: this.state.moddate[8].productUrl,img1:this.state.moddate[8].productImage.url.x350,
               bt1: this.state.moddate[8].productSubject,dd1:this.state.moddate[8].minOrderQuantity,
               jg1:this.state.moddate[8].fobPriceWithoutUnit,url2: this.state.moddate[9].productUrl,img2:this.state.moddate[9].productImage.url.x350,
               bt2: this.state.moddate[9].productSubject,dd2:this.state.moddate[9].minOrderQuantity,
               jg2:this.state.moddate[9].fobPriceWithoutUnit,url3: this.state.moddate[10].productUrl,img3:this.state.moddate[10].productImage.url.x350,
               bt3: this.state.moddate[10].productSubject,dd3:this.state.moddate[10].minOrderQuantity,
               jg3:this.state.moddate[10].fobPriceWithoutUnit,url4: this.state.moddate[11].productUrl,img4:this.state.moddate[11].productImage.url.x350,
               bt4: this.state.moddate[11].productSubject,dd4:this.state.moddate[11].minOrderQuantity,
               jg4:this.state.moddate[11].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
               bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
               yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:4}
           ];
        }

          if(rownumber=='5'){
          bbwidth='220px';
          marginLf='25px';
         yu_lbsz = [
              { url1: this.state.moddate[0].productUrl,img1:this.state.moddate[0].productImage.url.x350,
              bt1: this.state.moddate[0].productSubject,dd1:this.state.moddate[0].minOrderQuantity,
              jg1:this.state.moddate[0].fobPriceWithoutUnit,url2: this.state.moddate[1].productUrl,img2:this.state.moddate[1].productImage.url.x350,
              bt2: this.state.moddate[1].productSubject,dd2:this.state.moddate[1].minOrderQuantity,
              jg2:this.state.moddate[1].fobPriceWithoutUnit,url3: this.state.moddate[2].productUrl,img3:this.state.moddate[2].productImage.url.x350,
              bt3: this.state.moddate[2].productSubject,dd3:this.state.moddate[2].minOrderQuantity,
              jg3:this.state.moddate[2].fobPriceWithoutUnit,url4: this.state.moddate[3].productUrl,img4:this.state.moddate[3].productImage.url.x350,
              bt4: this.state.moddate[3].productSubject,dd4:this.state.moddate[3].minOrderQuantity,
              jg4:this.state.moddate[3].fobPriceWithoutUnit,url5: this.state.moddate[4].productUrl,img5:this.state.moddate[4].productImage.url.x350,
              bt5: this.state.moddate[4].productSubject,dd5:this.state.moddate[4].minOrderQuantity,
              jg5:this.state.moddate[4].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
              bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
              yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:5},
              { url1: this.state.moddate[5].productUrl,img1:this.state.moddate[5].productImage.url.x350,
              bt1: this.state.moddate[5].productSubject,dd1:this.state.moddate[5].minOrderQuantity,
              jg1:this.state.moddate[5].fobPriceWithoutUnit,url2: this.state.moddate[6].productUrl,img2:this.state.moddate[6].productImage.url.x350,
              bt2: this.state.moddate[6].productSubject,dd2:this.state.moddate[6].minOrderQuantity,
              jg2:this.state.moddate[6].fobPriceWithoutUnit,url3: this.state.moddate[7].productUrl,img3:this.state.moddate[7].productImage.url.x350,
              bt3: this.state.moddate[7].productSubject,dd3:this.state.moddate[7].minOrderQuantity,
              jg3:this.state.moddate[7].fobPriceWithoutUnit,url4: this.state.moddate[8].productUrl,img4:this.state.moddate[8].productImage.url.x350,
              bt4: this.state.moddate[8].productSubject,dd4:this.state.moddate[8].minOrderQuantity,
              jg4:this.state.moddate[8].fobPriceWithoutUnit,url5: this.state.moddate[9].productUrl,img5:this.state.moddate[9].productImage.url.x350,
              bt5: this.state.moddate[9].productSubject,dd5:this.state.moddate[9].minOrderQuantity,
              jg5:this.state.moddate[9].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
              bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
              yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:5},
              { url1: this.state.moddate[10].productUrl,img1:this.state.moddate[10].productImage.url.x350,
              bt1: this.state.moddate[10].productSubject,dd1:this.state.moddate[10].minOrderQuantity,
              jg1:this.state.moddate[10].fobPriceWithoutUnit,url2: this.state.moddate[11].productUrl,img2:this.state.moddate[11].productImage.url.x350,
              bt2: this.state.moddate[11].productSubject,dd2:this.state.moddate[11].minOrderQuantity,
              jg2:this.state.moddate[11].fobPriceWithoutUnit,url3: this.state.moddate[12].productUrl,img3:this.state.moddate[12].productImage.url.x350,
              bt3: this.state.moddate[12].productSubject,dd3:this.state.moddate[12].minOrderQuantity,
              jg3:this.state.moddate[12].fobPriceWithoutUnit,url4: this.state.moddate[13].productUrl,img4:this.state.moddate[13].productImage.url.x350,
              bt4: this.state.moddate[13].productSubject,dd4:this.state.moddate[13].minOrderQuantity,
              jg4:this.state.moddate[13].fobPriceWithoutUnit,url5: this.state.moddate[14].productUrl,img5:this.state.moddate[14].productImage.url.x350,
              bt5: this.state.moddate[14].productSubject,dd5:this.state.moddate[14].minOrderQuantity,
              jg5:this.state.moddate[14].fobPriceWithoutUnit,bbdbtp:bbdbtp,bbjgcolor:bbjgcolor,
              bblxcolor:bblxcolor,bbbtcolor:bbbtcolor,bbwidth:bbwidth,marginLf:marginLf,yu_bbbt:yu_bbbt,yu_bbdd:yu_bbdd,
              yu_bbjg:yu_bbjg,yu_jgqz:yu_jgqz,yu_bbdbwz_display:yu_bbdbwz_display,rownumber:5}
          ];
        }

        const slides = yu_lbsz.slice(0,3);

//分类
      let flnames = new Array();
      flnames[0]=mds.moduleData.yu_fl1 ;
      flnames[1]=mds.moduleData.yu_fl2 ;
      flnames[2]=mds.moduleData.yu_fl3 ;
      let flcolor=(mds.moduleData.yu_flys ? mds.moduleData.yu_flys : '#3b3b3b' );
      let flcolor1='#ffffff';
      let flcolor2=flcolor;
      let flcolor3=flcolor;
      let flindex=this.state.flindex;
      if(flindex==0){
        flcolor1='#ffffff';
        flcolor2=flcolor;
        flcolor3=flcolor;
      }
      if(flindex==1){
        flcolor1=flcolor;
        flcolor2='#ffffff';
        flcolor3=flcolor;
      }
      if(flindex==2){
        flcolor1=flcolor;
        flcolor2=flcolor;
        flcolor3='#ffffff';
      }
      const nextArrow = <div><img src='https://img.alicdn.com/imgextra/i2/3528491912/TB2Q9S2gUR1BeNjy0FmXXb0wVXa-3528491912.png'/></div>;
      const prevArrow = <div><img src='https://img.alicdn.com/imgextra/i4/3528491912/TB2NRdNgMaTBuNjSszfXXXgfpXa-3528491912.png'/></div>;
        return (<div className={'yu_css'} style={{marginBottom:yu_bottomjg,marginTop:yu_topjg,background:yu_bjys}}>
          {/* 标题开始 */}
      						<Yu_btDom yu_bttpdz={yu_bttpdz} yu_bttplj={yu_bttplj}  yu_btlx={yu_btlx} yu_btdwz={yu_btdwz} yu_btxwz={yu_btxwz}  dbtcolor={dbtcolor} xbtcolor={xbtcolor}/>
          {/* 标题结束 */}

            {/* 分类开始 */}
            <div className={'yu_flcss'} style={{zIndex:200}}>
            <div className={'yu_flwz'}>
              <span style={{color:flcolor1}}>{flnames[0]}</span>
            </div>
            <div className={'yu_flwz'}>
              <span style={{color:flcolor2}}>{flnames[1]}</span>
            </div>
            <div className={'yu_flwz'}>
              <span style={{color:flcolor3}}>{flnames[2]}</span>
            </div>
            </div>
        {/* 主体开始 */}

    <Slider nextArrow={nextArrow} prevArrow={prevArrow}  arrows={mds.moduleData.yu_lbjt} afterChange={this.afterChange}>
        {
            slides.map((item, index) =><div className="slider-img-wrapper" key={index} ><Yu_Dom item={item}/></div>)
        }
    </Slider>
        {/* 主体结束 */}

    </div>
    );
    }
    afterChange = (index) => {
            this.setState({
                flindex: index
            });
        };

};

export default IntlIcbuSmodDemo;
