import React    from 'react';
import styles   from 'components/Sidebar/Sidebar.scss';

export default function NoodlSidebarHeader(props) {
    return (
      <div className={styles.noodlheader}>
          <div className={styles.version}>
            <div>
              Noodl Cloud Services
            </div>
          </div>
      </div>
    );
}
