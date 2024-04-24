'use client'

import { useState } from "react";

const ProfileInfo = () => {
    const [profile, setProfile] = useState(null);

    // upload profile
    const uploadProfile = (e) => {
        setProfile(e.target.files[0]);
    };

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="wrap-custom-file">
                    <input
                        type="file"
                        id="image1"
                        accept="image/png, image/gif, image/jpeg"
                        onChange={uploadProfile}
                    />
                    <label
                        style={
                            profile !== null
                                ? {
                                      backgroundImage: `url(${URL.createObjectURL(
                                          profile
                                      )})`,
                                  }
                                : undefined
                        }
                        htmlFor="image1"
                    >
                        <span>
                            <i className="flaticon-download"></i> 写真をアップロード{" "}
                        </span>
                    </label>
                </div>
                <p>*3MB以下の JPG、PNGファイルを選択してください。正方形の写真を推奨しています。<br />
                    変更は保存するまで反映されません。</p>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput1">表示名</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput1"
                        placeholder="alitfn"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleEmail">メールアドレス</label>
                    <input
                        type="email"
                        className="form-control"
                        id="formGroupExampleEmail"
                        placeholder="creativelayers@gmail.com"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput3">姓</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput3"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput4">名</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput7">性別</label>
                    <select
                        className="selectpicker form-select"
                        data-live-search="true"
                        data-width="100%"
                    >
                        <option data-tokens="Status1">男性</option>
                        <option data-tokens="Status2">女性</option>
                    </select>
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput5">現在の職種</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput5"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label for="birthday">生年月日</label>
                    <input type="date" className="form-control" id="birthday" name="birthday" />
                </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6 col-xl-6">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput8">電話番号</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput8"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput13">住所 </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput13"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_input form-group">
                    <label htmlFor="formGroupExampleInput14">キャッチフレーズ</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput14"
                    />
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12">
                <div className="my_profile_setting_textarea">
                    <label htmlFor="exampleFormControlTextarea1">
                        自己紹介
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="7"
                    ></textarea>
                </div>
            </div>
            {/* End .col */}

            <div className="col-xl-12 text-right">
                <div className="my_profile_setting_input">
                    <button className="btn btn1">プロフィール表示</button>
                    <button className="btn btn2">保存する</button>
                </div>
            </div>
            {/* End .col */}
        </div>
    );
};

export default ProfileInfo;
