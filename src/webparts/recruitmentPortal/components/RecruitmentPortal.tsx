import * as React from 'react';
import styles from './RecruitmentPortal.module.scss';
import { IRecruitmentPortalProps, dynmiclinks, IJsonArray, IJsonMap, linksitems } from './IRecruitmentPortalProps';
import { service } from './logic'
import { boundMethod } from 'autobind-decorator';
import { SPHttpClientResponse } from '@microsoft/sp-http';
import { escape } from '@microsoft/sp-lodash-subset';

const logo: any = require('../../assets/images/logo.png');
const rightarrow: any = require('../../assets/images/right-arrow.png');
const hline: any = require('../../assets/images/h-line.png');
const hline1: any = require('../../assets/images/h-line1.png');
const icon: any = require('../../assets/images/icon.png');
const icon1: any = require('../../assets/images/icon1.png');
const icon2: any = require('../../assets/images/icon2.png');
const icon3: any = require('../../assets/images/icon3.png');
const icon4: any = require('../../assets/images/icon4.png');
const icon5: any = require('../../assets/images/icon5.png');
const icon6: any = require('../../assets/images/icon6.png');
const Picture1: any = require('../../assets/images/Picture1.png');
const bg1: any = require('../../assets/images/bg-1.jpg');
const bg2: any = require('../../assets/images/bg-2.jpg');
const bg3: any = require('../../assets/images/bg-3.jpg');
const Picture3: any = require('../../assets/images/Picture3.jpg');
const Picture4: any = require('../../assets/images/Picture4.jpg');
const Picture5: any = require('../../assets/images/Picture5.jpg');
const Picture6: any = require('../../assets/images/Picture6.jpg');

export default class RecruitmentPortal extends React.Component < IRecruitmentPortalProps, dynmiclinks > {
  private service: service;
  public constructor(props: IRecruitmentPortalProps) {
    super(props);
    this.service = new service(this.props.context);
    this.state = {
      config: [
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' },
        { title: '', links: '', sn: '', img: '' }
      ]
    };
  }
  public componentDidMount(): void {
    this._bindlinks();
  }
  public render(): React.ReactElement<IRecruitmentPortalProps> {
    return(
      <div>
      {this.props.description === '1' ?
      
        <div className={styles.header_bg}>
          <div className={'container-fluid'}>
            <div className={'row'}>
              <div className={'col-12 col-md-5'}>
                <div className={'ps-5 mt-5'}> <img src={logo} />
                  <div className={'mt-5'}>
                    <h1 className={'text-white'}>Distributor Portal</h1>
                  
                    <h6 className={'text-white mt-3'}>We have created this website to host all the material you would need as a distributor to promote the brands we represent to your audience, educating them and gaining additional leads.<br/>
Please note that this website is only meant for your eyes so please do not share the link or password with anyone outside of your team.
In case you could not find the content you are looking for, please reach out to our Marketing Team at marketing@itrident.com.</h6>
                 </div>
                </div>
              </div>
              <div className={'col-12 col-md-3'}></div>
              <div className={'col-12 col-md-4'}>
                <div className={'mt-5 pe-5'}>
                  <div className={'pt-l-5 bg-top text-white text-center'}>
                  


                  <p style={{"font-size":"16px"}}>  Welcome to Your Dedicated Portal</p><br />
                    <p>Scroll Down to Find<br />
                    the Right <br />Material For You!</p>
                  
                    <p className={'mt-3'}>
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={'service'}>
            <div className={'p-3 bg-color'}></div>
            <div className={'container-fluid'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <ul className={'list-inline text-white text-center m-0 pt-5 pb-5'}>
                    <a href={this.state.config[0].links}><li className={'list-inline-item'}><img src={this.state.config[0].img} /><br />
                    
                    </li></a>
                    <a href={this.state.config[1].links}><li className={'list-inline-item'}><img src={this.state.config[1].img} /><br />
                     
                    </li></a>
                    <a href={this.state.config[2].links}><li className={'list-inline-item'}><img src={this.state.config[2].img} /><br />
                    
                    </li></a>
                    {/*
                    <a href={this.state.config[3].links}><li className={'list-inline-item'}><img src={this.state.config[3].img} /><br />
                      <h5 className={'mt-3'}>{this.state.config[3].title} </h5>
                    </li></a>
                    <a href={this.state.config[4].links}><li className={'list-inline-item'}><img src={this.state.config[4].img} /><br />
                      <h5 className={'mt-3'}>{this.state.config[4].title} </h5>
                    </li></a>
                    <a href={this.state.config[5].links}><li className={'list-inline-item'}><img src={this.state.config[5].img} /><br />
                      <h5 className={'mt-3'}>{this.state.config[5].title} </h5>
                    </li></a>
                    <a href={this.state.config[6].links}><li className={'list-inline-item'}><img src={this.state.config[6].img} /><br />
                      <h5 className={'mt-3'}>{this.state.config[6].title}</h5>
                    </li></a>
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className={'container-fluid'}>
          <div className={'row h-100'}>
            <div className={'col-12 col-md-6 col-side-left'}>
              <img className={'mt-5'} src={logo} />
              <div className={'align-middle pt-large'}>
                <h1>Distributor</h1>
                <h1>Portal</h1>
                <h6 className={'pt-4'}>In case you could not find the content you are looking for, please reach out to our Marketing Team at marketing@itrident.com</h6>
                <img className={'pt-3'} src={rightarrow} /> </div>
            </div>
            <div className={'col-12 col-md-6 col-side-right'}>
              <div className={'container'}>
                <div className={'row pt-1	 text-center text-white p-relative'}>
                  {/*
                  <div className={'col-md-8'}>
                    <div className={'row'}>
                      <div className={'col-md-6 p-relative'}> <a href={this.state.config[7].title}>
                        <p className={'box-text'}>{this.state.config[7].title}</p>
                        <img className={'w-100'} src={this.state.config[7].img} /> </a> </div>
                      <div className={'col-md-6 mt-p-3 p-relative'}> <a href={this.state.config[8].links}>
                        <p className={'box-text'}>{this.state.config[8].title}</p>
                        <img className={'w-100'} src={this.state.config[8].img} /> </a> </div>
                      <div className={'col-md-6 pt-3  p-relative'}> <a href={this.state.config[9].links}>
                        <p className={'box-text'}>{this.state.config[9].title}</p>
                        <img className={'w-100'} src={this.state.config[9].img} /> </a> </div>
                  
                      <div className={'col-md-6 pt-3 p-relative'}> <a href={this.state.config[10].links}>
                        <p className={'box-text'}>{this.state.config[10].title}</p>
                        <img className={'w-100'} src={this.state.config[10].img} /> </a> </div>
                    </div>
                  </div>
                  *}
                  {/*
                  <div className={'col-md-4 mt-p-3  p-relative'}> <a href={this.state.config[11].links}>
                    <p className={'box-text'}>{this.state.config[11].title}<br />
                      <img className={'pt-2 pb-2'} src={hline1} />
                      </p>
                    <img className={'w-100 '} src={this.state.config[11].img} /> </a> </div>*/}
                </div>

                <div className={'row pb-0 text-center text-white mob-padding'}>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[7].links}>
                    <p className={'box-text'}>{this.state.config[7].title}</p>
                    <img className={'w-100 '} src={this.state.config[7].img} /> </a> </div>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[8].links}>
                    <p className={'box-text'}>{this.state.config[8].title}</p>
                    <img className={'w-100'} src={this.state.config[8].img} /> </a> </div>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[9].links}>
                    <p className={'box-text'}>{this.state.config[9].title}</p>
                    <img className={'w-100'} src={this.state.config[9].img} /> </a> </div>
                </div>

                <div className={'row pb-0 text-center text-white mob-padding'}>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[10].links}>
                    <p className={'box-text'}>{this.state.config[10].title}</p>
                    <img className={'w-100 '} src={this.state.config[10].img} /> </a> </div>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[11].links}>
                    <p className={'box-text'}>{this.state.config[11].title}</p>
                    <img className={'w-100'} src={this.state.config[11].img} /> </a> </div>
                    <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[12].links}>
                    <p className={'box-text'}>{this.state.config[12].title}</p>
                    <img className={'w-100'} src={this.state.config[12].img} /> </a> </div>
                </div>

                <div className={'row pb-0 text-center text-white mob-padding'}>
                 
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[13].links}>
                    <p className={'box-text'}>{this.state.config[13].title}</p>
                    <img className={'w-100'} src={this.state.config[13].img} /> </a> </div>
                  <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[14].links}>
                    <p className={'box-text'}>{this.state.config[14].title}</p>
                    <img className={'w-100'} src={this.state.config[14].img} /> </a> </div>
                    <div className={'col-md-4 p-1 p-relative '+styles.marginclass}> <a href={this.state.config[15].links}>
                    <p className={'box-text'}>{this.state.config[15].title}</p>
                    <img className={'w-100 '} src={this.state.config[15].img} /> </a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    );
  }
  @boundMethod
  private _bindlinks(): void {
    if(this.props.description === '1'){
      require('../../assets/css/webpage1.css');

    }else{
      require('../../assets/css/webpage.css');
    }
    const listname: string =  this.props.listname;
    const columns: string = 'Id,Title,Header,Links,SN,Imgpath';
    this.service.getListItem('', listname, '', columns, '', '', '')
      .then((response: SPHttpClientResponse) => {
        response.json().then((data: any) => {
          console.log(data);
          let title: string = '';
          let link: string = '';
          let sn: string = '';
          let imgpath: string = '';
          let config: linksitems[] = [];
          const nextprojectData: IJsonArray = data.value as IJsonArray;
          nextprojectData.forEach((item: IJsonMap) => {
            title = item.Header as string;
            link = item.Links as string;
            sn = item.SN as string;
            imgpath = item.Imgpath as string;
            config.push({ title: title, links: link, sn: sn, img: imgpath });

          });
          this.setState({ config: config });
        });
      })
  }
}
