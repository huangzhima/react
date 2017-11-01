var bignav=this.state.hombiglist.map(function(i,index){
				return (<Link to={i.url} key={index}><i className={"iconfont "+i.icon} style={{background:i.back}}></i>{i.nam}</Link>)
		})
		var litnav=this.state.homlitlist.map(function(i,index){
				return (<a href="javascript:;" key={index}><i className={"iconfont "+i.icon} style={{background:i.back}}></i>{i.nam}</a>)
		})





<div id="homepage">
				<div className="homeheader">
					<a href="javascript:;">北京</a>
					<div className="homeheaderser">
					<i className="iconfont icon-fangdajing"></i>
						<input type="text" placeholder="铁木真"/>
					</div>
					<a href="javascript:;"><i className="iconfont icon-youhuiquan-01"></i></a>
				</div>
				<div className="swiper-container homebanner">
					<div className="swiper-wrapper">
						<div className="swiper-slide"><img src="/img/banner.jpg" alt=""/></div>
						<div className="swiper-slide"><img src="/img/banner.jpg" alt=""/></div>
						<div className="swiper-slide"><img src="/img/banner.jpg" alt=""/></div>
					</div>
				</div>
				<div className="homebig">
				{bignav}
				</div>
				<div className="homelit">
					{litnav}
				</div>
				<div className="pro">
					<div className="protit">
						<img src="/img/tit.jpg" alt=""/>
					</div>
					<div className="prolist">
						<div className="prolistleft">
							<img src="/img/pic1.jpg" alt=""/>
						</div>
						<div className="prolistright">
							<div><img src="/img/pic2.jpg" alt=""/></div>
							<div><img src="/img/pic3.jpg" alt=""/></div>
							<div><img src="/img/pic4.jpg" alt=""/></div>
							<div><img src="/img/pic5.jpg" alt=""/></div>

						</div>
					</div>
				</div>
			</div>
		)