import React from 'react';
import './css/personnel.css';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Personnel() {
    return (
        <>
            <div className="content">
                <div className="row my-auto">
                    <div className="col-md-4">
                        <div className="card custom-card-style">
                            <img
                                src={logo}
                                className="card-img-top"
                                alt="ข่าวสารที่ 1"
                            />
                            <div className="card-body">
                                <h5 className="card-title">รศ. ดร.ธรา อั่งสกุล</h5>
                                <p className="card-text">Admin</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card custom-card-style">
                            <img
                                src={logo}
                                className="card-img-top"
                                alt="ข่าวสารที่ 2"
                            />
                            <div className="card-body">
                                <h5 className="card-title">อ. ดร. ทรงยุทธ เพิ่มผล</h5>
                                <p className="card-text">Admin</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card custom-card-style">
                            <img
                                src={logo}
                                className="card-img-top"
                                alt="ข่าวสารที่ 3"
                            />
                            <div className="card-body">
                                <h5 className="card-title">อ. อรรคพล วงศ์กอบลาภ</h5>
                                <p className="card-text">Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Personnel;
