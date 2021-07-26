import React from 'react';

function Listings({id}) {
    return (
        <aside id={id}>
            <section className="crayons-card crayons-card--secondary b-r5">
            <header className="crayons-card__header">
            <h3 className="crayons-subtitle-2">Listings</h3>
            <div className="crayons-card__actions">
                <a href="/listings" className="crayons-link--branded fw-medium fs-s">See all</a>
            </div>
            </header>

            <div>
                <a className="crayons-link crayons-link--contentful" href="/listings/products/flagsmith-open-source-feature-flag-and-remote-config-service-165k">
                <div>Flagsmith - open-source feature flag and remote config service</div>
                <div className="crayons-link__secondary">products</div>
                </a>
                <a className="crayons-link crayons-link--contentful" href="/listings/education/new-course-passing-the-coding-interview-free-to-dev-to-members-until-august-15th-19hp">
                <div>New course ~ Passing the Coding Interview ~ FREE to dev.to members until August 15th</div>
                <div className="crayons-link__secondary">education</div>
                </a>
                <a className="crayons-link crayons-link--contentful" href="/listings/jobs/go-developer-100-remote-56om">
                <div>Go Developer - 100% Remote</div>
                <div className="crayons-link__secondary">jobs</div>
                </a>
                <a className="crayons-link crayons-link--contentful" href="/listings/collabs/need-expert-users-of-cloud-services-to-share-their-experiences-e59">
                <div>Need expert users of cloud services to share their experiences </div>
                <div className="crayons-link__secondary">collabs</div>
                </a>
                <a className="crayons-link crayons-link--contentful" href="/listings/forhire/are-you-looking-for-flutter-developers-2858">
                <div>Are you looking for Flutter Developers?</div>
                <div className="crayons-link__secondary">forhire</div>
                </a>
            <a className="crayons-link crayons-link--branded block align-center pd12 fw-medium fs-s fw tx-c bl" href="/listings/new">Create a Listing</a>
            </div>
        </section>
      </aside>
    )
}

export default Listings;