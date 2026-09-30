// Asset Image Mapping
import profileImg from '../assets/images/hiba_shaik_profile_1786354812122.jpg';
import sentinelDriveImg from '../assets/images/sentinel_drive_car_1785250862814.jpg';
import autoResearchImg from '../assets/images/autoresearch_thumb_1785250988714.jpg';
import encryptionImg from '../assets/images/encryption_thumb_1785251005091.jpg';
import packetImg from '../assets/images/packet_thumb_1785251022811.jpg';
import skillNovaImg from '../assets/images/skill_nova_dashboard_1785775088758.jpg';
import roadPlanningImg from '../assets/images/road_planning_graph_1785775111348.jpg';

export const ASSET_IMAGES = {
  profile: profileImg,
  sentinel_drive: sentinelDriveImg,
  autoresearch: autoResearchImg,
  encryption: encryptionImg,
  packet: packetImg,
  skill_nova: skillNovaImg,
  road_planning: roadPlanningImg,
};

export function getProjectImage(imageId: string): string {
  switch (imageId) {
    case 'sentinel_drive_car':
      return sentinelDriveImg;
    case 'autoresearch_agent':
      return autoResearchImg;
    case 'encryption_tool':
      return encryptionImg;
    case 'packet_analyzer':
      return packetImg;
    case 'skill_nova':
      return skillNovaImg;
    case 'road_planning':
      return roadPlanningImg;
    default:
      return 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop';
  }
}

